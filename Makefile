DEST=~/mnt/sakura/www/SakuraRecordz

deploy: build cleanup deploy-all

deploy-all: deploy-php deploy-assets deploy-fonts deploy-img

cleanup:
	for file in `find . -name 'tags.lock' -o -name '.DS_Store' -o -name '*.swp' -o -name '*.swo'`; \
	do \
		rm $$file; \
	done;

build:
	echo "Build packages"
	gulp build
	echo "Build finished"

deploy-php:
	echo "Deploying php..."
	rm $(DEST)/*.php
	rm -r $(DEST)/App
	cp *.php $(DEST)
	cp -r App $(DEST)

deploy-assets:
	echo "Deploying assets..."
	rm -r $(DEST)/assets/*
	cp -r ./assets/* $(DEST)/assets
	rm $(DEST)/assets/*.map

deploy-fonts:
	echo "Deploying fonts..."
	rm -r $(DEST)/fonts/*
	cp -r ./fonts/* $(DEST)/fonts

deploy-img:
	echo "Deploying img..."
	rm -r $(DEST)/img/*
	cp -r ./img/* $(DEST)/img/
