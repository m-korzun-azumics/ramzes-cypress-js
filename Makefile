#Command 'build' will build your container for run testing in container mode
build:
	@docker build -t ramzes-cypress-js .
# @docker run -it	--name="ramzes-cypress-js" \
# # 	--mount type=bind,source="$(pwd)"/ramzes-cypress-js,target=/app/ramzes-cypress-js 
# 	@docker run -p 3000:3000 -v $(PWD)/cypress/:ramzes-cypress-js/cypress/ --rm -it ramzes-cypress-js

#Command 'rebuild' will copy latest changes in your tests to the container
rebuild:
	@docker cp ./cypress ramzes-cypress-js:/cypress

#Command 'test' will run your tests in containers 
test:
	docker-compose run e2e-chrome
