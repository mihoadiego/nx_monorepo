/*

source:
https://egghead.io/lessons/javascript-install-and-use-external-npm-packages-in-an-nx-workspace



toutes les commandes ci dessous, notamment les etapes 2..; sont a faire en dehors d'un repos deja git cloné, cest pour cela que 
je lai fait depuis home/workspace et non pas depuis un projet git deja fait (type node poroject)







########################################################################################################
toutes les commandes ou il va faire yarn nx dans le tuto, il faudra que je fasse npx nx a la place
et quand il fait yarn add, c'est lequivalent de npm install 
########################################################################################################


1) cd workspace   (pour aller dans mon dossier workspace)


2) npx create-nx-workspace nxegghead

	choose what to create: integrated
	what to create in the new workspace: apps
	Enable distributed caching to make your CI faster: yes




3) cd nxegghead

	et on va creer un fichier workspace.json, au meme niveau que le nx.json, qui contiendra ci dessous (fait sans que le tuto le dise, mais le tuto avait ce fichier dans son exemple)
	{
	    "version":1,
	    "projects": {},
	    "cli":{
		"defaultCollection": "@nrwl/workspace"
	    }
	}


########################################################################################################
4) npx nx list     (pour avoir la liste de toutes les commandes disponibles dans nx a executer)
########################################################################################################

5) installation des plugins nécessaires (workspace, react...)  (commandes lancées depuis le dossier nxegghead)
	npm install @nrwl/nx-plugin -D     
	npm install @nrwl/workspace -D     
	npm install @nrwl/react

########################################################################################################
pour connaitre la liste des commandes/possibilités liées a un plungin (dans notre cas react), on lance la commande:
	npx nx list @nrwl/react  
########################################################################################################


6 ) creation de notre application react: 

	npx nx g @nrwl/react:application --help     (dabord pour connaitre toutes les options que l'on peut avoir pour npx nx g @nrwl/react:application)
	
	du coup on va faire 
	
	npx nx g @nrwl/react:application store   (pour creer une application react qui portera le nom de store)
	
	
	
	
	
	
	################################################
	il faudra peut etre rajouté, mais pas sure (a ce stade toujours pas eu besoin de le faire ), dans le fichier nx.json, les éléments ci dessous (VOIR SI CA NE FONCTIONNE PAS CAR AUTOMATIQUEMENT ILS NONT PAS ETE GENERE CHEZ MOI
	QUAND J'AI LANCE MA COMMANDE, MAIS DANS CELUI DU TUTO OUI ALORS a RAJOUTEr A LA MAIN SI BESOIN... A SUIVRE
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
				  
				  
				  
				  ET DANS tasksRunnerOptions.options aussi rajoutER 
				  "showUsageWarnings": true
	ET DU COUP GRAND MISTER CONCERNANT LE workspace.json file, que je n'ai aps en local mais qui semble mis a jour et utilisé dans le tuto, a voir (
	################################################

7) pour lancer mon app react qui se nomme store, toujours depuis le dossier nxegghead:
	npx nx run store:serve 
	
	
	
pour changer le port de mon app react, je vais dans le fichier nxegghead->apps->store->project.json  et je trouve la clé targets.serve.options a laquelle je rajoute dans les options un "port":4201 par example



8) j'ai ensuite crée a la volée un rendu dans nxegghead->apps->store->src->app->app.tsx en typescript pour voir un rendu, en installant d'abord mui, 
	et donc j'ai du tapper les commandes suivantes depuis le dossier nxegghead directement:
		npm install @mui/material @mui/styled-engine-sc
		npm install @emotion/react 
		npm install @emotion/styled

	et j'ai ensuite crée un dossier pour creer mes premieres typ typescript, dans apps->store->src->app->typologies->index.tsx
	et j'ai ensuite crée un dossier app->store->src->fake_api->index.ts dans lequel j'ai cree des données bidons
	et j'ai ensuite utilisé ces données dans le fichier app->store->src->app->app.tsx    

		
9) pour lancer un lint de notre projet: npx nx run store:lint



10 ) puis j'ai fait mon premier push sur git, pour cela, j'ai du d'abord creer un repo sur github, que j'ai en loccurrence nommé nx_monorepo, 
puis j'ai copié l'adresse url de ce repository, à  savoir https://github.com/mihoadiego/nx_monorepo.git (pour la 4eme commande ci dessous)
		puis je suis retourné sur mon projet, et directement à la source de nxegghead, j'ai tappé:
			git init
			git add .
			git commit -m'workspace with react creation'
			git remote add origin https://github.com/mihoadiego/nx_monorepo.git
			git push -u -f origin main

			et ca m'a permis, apres connection depuis VS code au github, de push mon monorepo!








jen suis a l'etape 6 du tuto



*/
