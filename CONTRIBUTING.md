# Contribuir a Raíces

1. Abre un issue con el problema o propuesta; incluye pasos de reproducción sin datos personales.
2. Crea un fork y una rama.
3. Instala con `pnpm install --frozen-lockfile`.
4. Ejecuta `pnpm test` y `pnpm build`.
5. Abre un pull request con la motivación, pruebas y fuentes.

## Preguntas

- Redacta preguntas y explicaciones originales en español. No copies bancos comerciales ni reactivos reservados.
- Añade una fuente primaria confiable: SRE, INAH, INEHRM, UNESCO u organismo pertinente.
- Evita ambigüedades y hechos volátiles sin fecha.
- Usa cuatro opciones distintas. La correcta se almacena en el índice 0; la interfaz baraja las opciones.
- No reutilices ni renombres IDs: los respaldos dependen de ellos.
- Actualiza las pruebas de tamaño y cobertura al ampliar el banco.

## Datos y mantenimiento

No incluyas documentos de identidad, correos, tokens, configuraciones personales ni respaldos reales. Usa datos sintéticos. Consulta SECURITY.md para reportes sensibles.

Mantén la compatibilidad de `raices.v1`. Explica las nuevas dependencias y cualquier cambio de privacidad. No añadas telemetría por defecto.

Las contribuciones se distribuyen bajo MIT. Trata a las demás personas con respeto y centra la discusión en las ideas y el código.
