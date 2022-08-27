
## Ruby on Rails

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
