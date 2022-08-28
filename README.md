## Finisterre

This Ansible playbook sets up

- Ruby on Rails + React application.
- Pre-configred Ansible playbook for deployment as github action

### How to run

Edit `config` with your details

```
cp config.example config
vi config
```

Run the make command.

```
make rails
```

This will prompt you for the name of your application (for example grass-valley).

Creates a rails appliation in the specified location, and a .deploy folder within it. Deploy instructions in full will be in the README.md of the new application

## Where does it install

By default it will place the application in your home folder. You can change this by editing the Makefile with preferred location, eg

```Makefile
DEFAULT=/my-apps-folder
```

Alternatively you can pass in a location with the make command, eg

```sh
make rails LOCATION="/rails-applications"
```

This means it can also be set up as an alias and run from anywhere on the file system directly into current directory, eg

```sh
railsn () {
	make -f ~/finisterre/Makefile rails -C ~/finisterre LOCATION=`pwd`
}
```

This can then be run simply with `railsn` and the app will be set up in the current directory

[image](https://user-images.githubusercontent.com/4191428/187072594-fedff1b3-9865-46ce-9dcf-7db9b3d8c143.png)
[image](https://user-images.githubusercontent.com/4191428/187072601-1813d1db-7b68-49a0-8f7d-1f8c27166b69.png)

