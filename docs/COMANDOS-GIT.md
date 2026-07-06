# Comandos Git utilizados en este proyecto

## Configuración inicial

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git init
```

## Commits y ramas

```bash
git add .
git commit -m "mensaje del commit"
git branch nombre-rama
git checkout nombre-rama
git merge otra-rama
```

## Repositorio remoto

```bash
git remote add origin https://github.com/usuario/proyecto-git.git
git push -u origin main
git fetch origin
git pull origin main
```

## Recuperación de versiones

```bash
git log --oneline
git reset --soft HEAD~1
git reset --hard HEAD~1
git checkout <commit-hash> -- archivo.txt
```

## Resolución de conflictos

```bash
git merge otra-rama
# Editar archivos con conflictos
git add archivo-resuelto.txt
git commit -m "merge: resolver conflictos"
```
