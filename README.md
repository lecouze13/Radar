# Projet Radar

Ce projet est une application Radar développée avec Angular.

## Introduction

Ce projet vise à créer une application de radar pour visualiser des données spécifiques de manière conviviale et interactive.

## Prérequis

Avant de démarrer, assurez-vous d'avoir Node.js et npm installés sur votre machine:
 https://nodejs.org/en/download

Exécutez ces commandes pour vérifier la bonne installation de npm et node, sinon télécharger node avec le lien du dessus et redémarrez votre éditeur de code/terminal: 
```bash
node -v
npm -v
```

De plus, pour exécuter ce projet, Angular CLI doit être installé. Si ce n'est pas le cas, vous retrouvez par la suite une section vous expliquant comment l'installer(voir *Lancement de l'application*).

Lancez la commande suivante pour verifier que python est installé sur votre pc
```bash
python --version
```

Si vous ne l'avez pas, installez le avec le lien suivant:
Linux

```bash
sudo apt update
sudo apt install python3
sudo apt install python3-pip 
```
MAC
Via Homebrew (si Homebrew est installé):

Ouvre le terminal et tape :
```bash
brew install python
```
Via le site web Python:

Télécharge Python depuis le site web officiel : https://www.python.org/downloads/
Lance le package d'installation téléchargé et suis les instructions.

Windows:
Télécharge Python depuis le site web officiel : https://www.python.org/downloads/windows/
Lance le programme d'installation et assure-toi de cocher la case "Add Python to PATH" lors de l'installation.


## Installation

Pour obtenir une copie du projet sur votre machine locale, suivez ces étapes :
Clonez le dépôt depuis GitHub :
```bash
git clone https://github.com/lecouze13/Radar.git
```

Accédez au répertoire du projet :
```bash
cd radarFrance/frontend
```

Installez les dépendances nécessaires à l'aide de npm :
```bash
    npm install
```

## Lancement de l'application
Si vous n'avez pas Angular CLI, utilisez la commande suivante pour l'installer:
```bash
npm install -g @angular/cli
```

Une fois les dépendances installées, lancez l'application avec Angular CLI. Utilisez la commande suivante :
```bash
npm run start
```

Cela démarrera le serveur de développement. Ouvrez votre navigateur et accédez à http://localhost:4200/ pour voir l'application Radar en action.
Contribution

Si vous souhaitez contribuer à ce projet, veuillez consulter les directives de contribution dans le fichier CONTRIBUTING.md.
Remarques

N'hésitez pas à explorer le code source pour mieux comprendre son fonctionnement ou à ajouter de nouvelles fonctionnalités. Pour toute question ou suggestion, veuillez ouvrir une nouvelle issue.

## Installation du back-end

Ouvrir un autre terminal en plus du terminal front-end
```bash
cd radarFrance/backend
```

Puis installer les dependances suivantes:
```bash
pip install flask flask_cors pandas folium geocoder requests 
```

## Installation d'airflow



## Configuration des chemins d'accès et des informations de connexion Airflow

Rendez-vous d'abord dans le fichier config.json se trouvant dans le dossier backend, puis modifiez les informations username, password par celles correspondant à vos identifiants Airfrlow. Vous devez aussi changer le lien API d'Airflow, même si en général c'est souvent le même.

Rendez-vous ensuite dans le fichier config.json se trouvant dans le dossier dags, puis modifiez les informations PROJECT_PATH et insérez y le chemin d'accés correspondant au dossier ou vous avez placé le dépot git suivi de /BigData (*ex: /amuhome/h20019468/Bureau/BigData*).
Vous pouvez si vous le souhaitez modifier la variable INTERVAL définir l'intervalle dans lequel vous souhaitez mettre à jour les données radar.

Enfin, placez ce répertoire dags dans votre dossier airflow. Si vous avez déjà un dossier dags, placez simplement le contenu de dags (*config.json, creationCarte.py et laod_transf.py*) dans votre dossier dags.


## Lancement  du back-end

Lancez le backend flask avec la commande suivante:
```bash
python appAirflow.py
```

Lancez ensuite Airflow.
Pour ce faire ouvrez deux nouveaux terminal et dans chaque terminal l'une de ces commandes:
```bash
airflow scheduler
```
```bash
airflow webserver
```


