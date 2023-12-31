from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import folium
import geocoder
import requests
app = Flask(__name__)
CORS(app)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    return response

# Fonction pour récupérer la localisation
def get_location():
    location = geocoder.ip('me')
    return location.latlng

# Fonction pour récupérer le code du département
def get_department_code(latitude, longitude):
    url = f"https://api-adresse.data.gouv.fr/reverse/?lon={longitude}&lat={latitude}"
    response = requests.get(url)
    department_code = None
    if response.status_code == 200:
        data = response.json()
        if 'features' in data and len(data['features']) > 0:
            properties = data['features'][0]['properties']
            if 'postcode' in properties:
                department_code = properties['postcode'][:2]
    return department_code

# Route pour obtenir les données de localisation et générer la carte
@app.route('/generate_map', methods=['GET'])
def generate_map():
    
    latitude, longitude = get_location()
    department_code = get_department_code(latitude, longitude)

    # Charger les données depuis le fichier CSV
    file_path = './data/radars.csv'
    data = pd.read_csv(file_path)

    # Filtrer les données pour une région spécifique
    data_region = data[data['departement'] == str(department_code)]

    # Créer une carte avec Folium centrée sur les coordonnées de l'utilisateur
    map = folium.Map(location=[latitude, longitude], zoom_start=12)

    # Ajouter des marqueurs personnalisés pour chaque radar dans la région sélectionnée
    for index, row in data_region.iterrows():
        if not pd.isnull(row['latitude']) and not pd.isnull(row['longitude']):
            popup_text = f"Emplacement : {row['emplacement']} <br> Type : {row['type']}"
            folium.Marker([row['latitude'], row['longitude']], popup=popup_text, icon=folium.Icon(color='blue')).add_to(map)

    # Ajouter un marqueur pour la position actuelle
    folium.Marker([latitude, longitude], popup='Votre position', icon=folium.Icon(color='red')).add_to(map)

    # Générer le code HTML de la carte et le retourner au frontend
    map_html = map.get_root().render()
    return jsonify({'map_html': map_html})


@app.route('/generate_map', methods=['POST'])
def generate_mapD():
    latitude, longitude = get_location()
    department_code = None

    # Récupérer les données envoyées via la requête POST
    request_data = request.get_json()

    if request_data and 'departement_code' in request_data:
        department_code = request_data['departement_code']
    else:
        # Obtention du code du département basé sur les coordonnées si le code n'est pas fourni
        department_code = get_department_code(latitude, longitude)

    # Charger les données depuis le fichier CSV
    file_path = './data/radars.csv'
    data = pd.read_csv(file_path)

    # Filtrer les données pour un département spécifique
    if department_code:
        data_region = data[data['departement'] == str(department_code)]

        custom_icon_path = './icones/radar_fixe.png'

        # Créer une carte avec Folium centrée sur les coordonnées de l'utilisateur
        map = folium.Map(location=[latitude, longitude], zoom_start=12)

    # Ajouter des marqueurs personnalisés pour chaque radar dans la région sélectionnée
    for index, row in data_region.iterrows():
        if not pd.isnull(row['latitude']) and not pd.isnull(row['longitude']):
            popup_text = f"Emplacement : {row['emplacement']} <br> Type : {row['type']}"
            folium.Marker([row['latitude'], row['longitude']], popup=popup_text, icon=folium.Icon(color='blue')).add_to(map)

    # Ajouter un marqueur pour la position actuelle
    folium.Marker([latitude, longitude], popup='Votre position', icon=folium.Icon(color='red')).add_to(map)

    # Générer le code HTML de la carte et le retourner au frontend
    map_html = map.get_root().render()
    return jsonify({'map_html': map_html})


if __name__ == '__main__':
    app.run(debug=True)