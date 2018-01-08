DEST=~/mnt/sakura/www/SakuraRecordz

deploy:
	gulp build
	cp *.php $(DEST)
	cp -r ./assets/* $(DEST)/assets
	cp -r ./fonts/* $(DEST)/fonts
