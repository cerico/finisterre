DEFAULT=~
rails:
ifdef LOCATION
	ansible-playbook rails.yml --extra-vars "app_directory=$(LOCATION)"
else
	ansible-playbook rails.yml  --extra-vars "app_directory=${DEFAULT}"
endif
	@cat .location
	@rm .location
