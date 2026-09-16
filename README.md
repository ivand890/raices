# Raíces 🌱

Práctica abierta de historia y cultura de México, con niveles, simulacros y repaso espaciado. Interfaz en español, construida con React y Vite.

**Proyecto independiente: no está afiliado a la SRE, no reproduce su banco reservado, no ofrece asesoría migratoria y no garantiza aprobar.** Consulta la [guía de estudios de la SRE](https://portales.sre.gob.mx/tramites-dgaj/naturalizacion/guia-de-estudios) y las instrucciones de tu trámite.

## Funciones

- 125 preguntas originales, distribuidas en 8 niveles y 2 etapas.
- Prácticas de 10 preguntas; 8 aciertos desbloquean el siguiente nivel.
- Los temas se pueden practicar desde el primer día, sin esperar a desbloquear la ruta.
- Simulacro mixto de ambas etapas y práctica de la segunda etapa.
- Tarjetas sin puntuación y estadísticas de aciertos por tema.
- Repaso espaciado: un error vuelve hoy; un acierto pospone la pregunta 1, 3, 7, 14 o 30 días.
- XP, rachas y logros.
- Explicaciones; las 50 preguntas de ampliación tienen enlaces de lectura por pregunta. El banco inicial remite a la bibliografía general.
- Historial de los últimos 50 intentos, prácticas en pausa y respaldos JSON. Los respaldos `raices.v1` anteriores siguen siendo válidos.

El cronómetro es informativo, sin límite de tiempo. No evalúa comprensión del español. Las reglas de la app no son una certificación oficial.

## Ejecutar localmente

Requisitos: Node.js 24 LTS y pnpm 11.25.0. No hacen falta claves API, cuentas ni base de datos.

```sh
git clone https://github.com/ivand890/raices.git
cd raices
pnpm install --frozen-lockfile
pnpm dev
```

Abre http://127.0.0.1:5173/.

```sh
pnpm test       # Pruebas del motor, banco y distribución
pnpm build      # Genera dist/
pnpm preview    # Sirve la compilación localmente
```

## Privacidad y progreso

El progreso se guarda en `localStorage` con la clave `raices.v1`, sólo en ese navegador y origen. No hay sincronización, analítica ni backend de la app. El proveedor de alojamiento puede registrar solicitudes; Google Fonts recibe solicitudes al cargar las tipografías.

Antes de cambiar de dominio, navegador o dispositivo: **Biblioteca → Exportar progreso** y después **Importar respaldo** en el nuevo destino. Los respaldos contienen resultados y fechas: no los adjuntes a issues ni los subas al repositorio. Borrar los datos del navegador borra el avance local.

## Alojar tu copia

`pnpm build` produce un sitio estático en `dist/`, que puedes servir mediante HTTPS en la raíz de un dominio. No requiere un proveedor específico. La identidad y configuración de la instancia privada del autor no forman parte del repositorio.

La app no implementa autenticación: configura el control de acceso en tu proveedor si necesitas privacidad. No publiques la carpeta de desarrollo, respaldos ni documentos personales.

## Estructura

- `src/questions.js`, `advanced.js`, `extra.js`: preguntas y fuentes.
- `src/engine.js`: sesiones, puntuación y validación de respaldos.
- `src/main.jsx`: interfaz y navegación.
- `src/StudyPanel.jsx`: tarjetas y estadísticas.
- `public/pyramid.png`: ilustración del proyecto.
- `PRODUCT.md`, `DESIGN.md`: contexto de producto y sistema visual.

## Contribuir y licencia

Lee [CONTRIBUTING.md](CONTRIBUTING.md). Se agradecen correcciones documentadas, mejoras de accesibilidad y preguntas originales con fuentes verificables.

Licencia MIT: [LICENSE](LICENSE). Consulta [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para créditos y derechos del material externo.
