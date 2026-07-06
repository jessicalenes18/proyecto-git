# Guía para publicar en GitHub

Sigue estos pasos para completar la entrega en GitHub.

## Paso 1: Iniciar sesión en GitHub CLI

Abre una terminal y ejecuta:

```bash
gh auth login
```

Selecciona:
- GitHub.com
- HTTPS
- Login with a web browser (o token si prefieres)

## Paso 2: Crear repositorio público en GitHub

Desde la carpeta `proyecto-git`:

```bash
cd proyecto-git

# Cambiar el remoto de local a GitHub (reemplaza TU_USUARIO)
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/proyecto-git.git

# Crear repo público y subir todo
gh repo create proyecto-git --public --source=. --remote=origin --push
```

O manualmente en el navegador:
1. Ve a https://github.com/new
2. Nombre: `proyecto-git`
3. Visibilidad: **Público**
4. No inicialices con README (ya existe localmente)
5. Crea el repositorio y ejecuta:

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/proyecto-git.git
git push -u origin --all
git push origin --tags
```

## Paso 3: Crear Pull Request (simulación)

En GitHub, para demostrar PRs:

```bash
# Crear rama nueva con un cambio
git checkout -b feature/nueva-funcionalidad
# Editar un archivo, commit y push
git add .
git commit -m "feat: nueva funcionalidad para PR"
git push -u origin feature/nueva-funcionalidad

# Crear PR desde CLI
gh pr create --title "Agregar nueva funcionalidad" --body "PR de práctica para la entrega" --base main
```

## Paso 4: Captura de pantalla (opcional)

Ejecuta y toma captura:

```bash
git log --oneline --graph --all
```

## Entregables en Q10

1. **URL del repositorio**: `https://github.com/TU_USUARIO/proyecto-git`
2. **Archivo ZIP**: `proyecto-git.zip` (en la carpeta Git)
3. **Captura** (opcional): del comando `git log --oneline --graph --all`
