
# Diseño de Interfaces de Usuario — 2026
Repositorio oficial del laboratorio de **Diseño de Interfaces de Usuario (DIU)**.

Este repositorio se utilizará para:

- compartir material del curso
- publicar instrucciones de tareas
- entregar prácticas mediante GitHub

---

# Estructura del repositorio

El repositorio tiene dos tipos de ramas:

## 1️. Rama principal

```

main

```

La rama **main** contiene únicamente:

- material del curso
- instrucciones de tareas
- ejemplos de código
- recursos de clase

 **Los estudiantes NO deben hacer Pull Request hacia `main`.**

---

## 2️. Ramas de estudiantes

Cada estudiante tiene **una rama propia con su nombre**.

Ejemplo:

```

andrea-amaya

```

Todas las tareas del semestre se entregarán **en la rama del estudiante**.

---

# Regla principal del repositorio

```

main → material del curso
rama del estudiante → entregas

```

Ejemplo de estructura:

```

main
Clase-01-HTML
Proyecto-Backend


andrea-amaya


````

---

# Flujo de trabajo para las tareas

Cada tarea se entregará siguiendo este proceso.

---

## 1. Hacer Fork del repositorio

En GitHub presiona **Fork** para crear una copia del repositorio en tu cuenta.

---

## 2️. Clonar tu fork

```bash
git clone https://github.com/TU-USUARIO/DIU2026-2
````

Entrar al repositorio:

```bash
cd DIU2026-2
```

---

## 3. Crear una rama para la tarea

Ejemplo para la tarea 1:

```bash
git checkout -b tarea-01
```

---

## 4. Realizar commits

```bash
git add .
git commit -m "Tarea 01 - HTML + CSS"
```

---

## 5. Subir cambios a tu fork

```bash
git push origin tarea-01
```

---

## 6. Crear Pull Request

En GitHub crea un **Pull Request desde tu fork hacia la rama que corresponde a tu nombre**.

Ejemplo:

```
Fork: tu-usuario/tarea-01
↓
Repositorio original: andrea-amaya
```

**NO enviar Pull Request hacia `main`.**

---

# Formato del Pull Request

El título del Pull Request debe ser:

```
Tarea 01 - Nombre Apellido
```

Ejemplo:

```
Tarea 01 - Andrea Amaya
```

La descripción debe incluir:

* Nombre completo
* Qué se implementó
* Dificultades encontradas
* Si utilizó IA o no

---

# Archivos de entrega

Cada tarea debe incluir:
Una carpeta con el número de tarea y archivos de la tarea dentro
```
Tarea01
      index.html
      styles.css
```

Opcional (si utilizaste IA):

```
ia_documentacion.txt
```

---

# Uso opcional de IA

El uso de herramientas de IA está permitido, pero debe documentarse.

Si utilizas IA debes incluir un archivo:

```
ia_documentacion.txt
```

Este archivo debe contener:

* objetivo de la consulta
* prompt utilizado
* resultado generado
* modificaciones realizadas
* análisis crítico

---

# Buenas prácticas

* Realizar commits claros
* Mantener código ordenado
* Usar nombres descriptivos
* No modificar archivos de otros estudiantes
* No hacer Pull Request hacia `main`

---

# Tecnologías utilizadas en el curso

Durante el curso trabajaremos con:

* HTML5
* CSS3
* JavaScript
* React
* Django
* Django REST Framework

