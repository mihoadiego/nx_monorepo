/*

===========================================================================================================
source du tuto:
https://egghead.io/lessons/javascript-install-and-use-external-npm-packages-in-an-nx-workspace

===========================================================================================================
toutes les commandes ci dessous, notamment les etapes 2.. 
sont a faire en dehors d'un repos deja git cloné, 
cest pour cela que je lai fait depuis home/workspace et non pas depuis un projet git deja fait (type node project)


===========================================================================================================
toutes les commandes ou il va faire yarn nx dans le tuto, il faudra que je fasse npx nx a la place
et quand il fait yarn add, c'est lequivalent de npm install 





===========================================================================================================
===========================================================================================================
PAS A PAS:
===========================================================================================================
===========================================================================================================


1) cd workspace   (pour aller dans mon dossier local workspace)


2) npx create-nx-workspace nxegghead

	choose what to create: integrated
	what to create in the new workspace: apps
	Enable distributed caching to make your CI faster: yes



3) cd nxegghead

	j'ai alors crée un fichier workspace_.json, au meme niveau que le nx.json, qui contient les éléments ci dessous 
	(fait sans que le tuto le dise, mais le tuto avait ce fichier dans son exemple mais n'a pas été généré de mon coté)
			{
				"version":1,
				"projects": {},
				"cli":{
				"defaultCollection": "@nrwl/workspace"
				}
			}


========= NOTA BENE
  		 npx nx list     (pour avoir la liste de toutes les commandes disponibles dans nx a executer)





4) installation des plugins nécessaires (workspace, react...)  (commandes lancées depuis la source du dossier nxegghead directement)
	npm install @nrwl/nx-plugin -D     
	npm install @nrwl/workspace -D     
	npm install @nrwl/react

========= NOTA BENE
		 npx nx list @nrwl/react   pour connaitre la liste des commandes/possibilités liées a un plugin (dans notre cas react):




5 ) creation de l'application react nommée 'store', via les commandes ci dessous: 
	npx nx g @nrwl/react:application store   (pour creer une application react qui portera le nom de store)

========= NOTAB BENE
	     npx nx g @nrwl/react:application --help     (commande pour lister les options dispo  pour npx nx g @nrwl/react:application)

		
========= NOTA BENE
	il faudra peut etre rajouté, mais pas sure (a ce stade toujours pas eu besoin de le faire ), dans le fichier nx.json, 
	les éléments ci dessous 
	(voir si nécessaire, car les lignes ci dessous n'ont pas été générées sur mon poste quand j'ai exec les commandes du tuto, 
	 pourtant, dans les fichiers du tuto, ces lignes ont été rajoutées automatiquement
	 a voir si besoin de les rajouter a la main pour la suite, pour l'instant c'est pas bloquant, a suivre... 
				  "implicitDependencies": { 
				    "package.json": {
				      "dependencies": "*",
				      "devDependencies":"*"
				    },
				    "tsconfig.base.json":"*",
				    "tslint.json":"*",
				    "nx.json":"*"
				  }, 
				  "projects": {
				    "store": {
				      "tags": []
				    },
				    "store-e2e": {
				      "tags": [],
				      "implicitDependencies": ["store"]
				    }
				  },
				  
				  et dans  tasksRunnerOptions.options aussi rajoutER 
				  "showUsageWarnings": true
	ET DU COUP GRAND MISTER CONCERNANT LE workspace_.json file, que jai crée a la main en local 
	ce fichier workspace.json, (auquel moi j'ai rajouté un _ en local car visiblement pas généré) semble mis a jour et utilisé dans le tuto, 
	a voir




6) pour lancer mon app react qui se nomme store, toujours depuis le dossier nxegghead:
	npx nx run store:serve 
	
========= NOTA BENE		
	pour changer le port de mon app react, je vais dans le fichier nxegghead->apps->store->project.json  
	et je trouve la clé targets.serve.options a laquelle je rajoute dans les options un "port":4201 par example




7) j'ai ensuite crée a la volée un rendu dans nxegghead->apps->store->src->app->app.tsx en typescript pour voir un rendu, en installant d'abord mui, 
	et donc j'ai du tapper les commandes suivantes depuis le dossier nxegghead directement:
		npm install @mui/material @mui/styled-engine-sc
		npm install @emotion/react 
		npm install @emotion/styled

	et j'ai ensuite crée un dossier pour creer mes premieres typ typescript, dans apps->store->src->app->typologies->index.tsx
	et j'ai ensuite crée un dossier app->store->src->fake_api->index.ts dans lequel j'ai cree des données bidons
	et j'ai ensuite utilisé ces données dans le fichier app->store->src->app->app.tsx    

========= NOTA BENE				
	pour lancer un lint de notre projet: npx nx run store:lint



8 ) premier push sur git, 
		pour cela, j'ai du d'abord creer un repo sur github, que j'ai en loccurrence nommé nx_monorepo, 
		puis j'ai copié l'adresse url de ce repo, à  savoir https://github.com/mihoadiego/nx_monorepo.git (pour la 4eme commande ci dessous)
		puis je suis retourné sur mon projet, et directement à la source de nxegghead, j'ai tappé:
			git init
			git add .
			git commit -m'workspace with react creation'
			git remote add origin https://github.com/mihoadiego/nx_monorepo.git
			git push -u -f origin main

		et ca m'a permis, apres connection depuis VS code au github, de push mon monorepo!

jen suis a l'etape 7 du tuto


9) gestion des images
	le dossier nxegghead->apps->store->src->assets permet de stocker toutes les images que l'on veut.
	elles sont ensuite accessibles dans notre appli react, via par exemple  image: '/assets/larson.jpg'

========= NOTA BENE				
    les dossiers accessibles pour les assets sont dans nxegghead->apps->store->project.json
	précisément, dans ce fichier json, dans la clé targets.build.assets
	on peut d'ailleurs paramétrer ces assets comme ci dessous:
				          "assets": ["apps/store/src/favicon.ico", 
						  			 "apps/store/src/assets", 
									 {
										"input":"./example",          -> la ou va pointer une adresse de dossier par ex , en locurrnce ici un dossier qui serait dans nxegghead->apps->store et qui s'appelerait example  
										"glob": "*.png",			  -> pour lui dire de prendre tous les fichiers png du dossier précisé dans input
										"output":"./xxxxx" 		      -> adresse pointant sur l'endroit ou les assets devraient etre copiées au moment du compile (dist)
									  }
									],

*/
