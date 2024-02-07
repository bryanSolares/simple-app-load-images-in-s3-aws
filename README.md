# SIMPLE IMAGE UPLOAD APP IN AWS S3 SERVICE

1. Instalación de multer
2. Configuración de libraría
3. Añadir middleware a ruta
4. Consideraciones de seguridad
   WARNING: Make sure that you always handle the files that a user uploads. Never add multer as a global middleware since a malicious user could upload files to a route that you didn't anticipate. Only use this function on routes where you are handling the uploaded files.
5. Configuración de los límites permitidos para cargar (medidos en bytes) y restricciones para carga de archivos
6. Instalación de SDK AWS
7. Consideración con la migración al SDK Javascript v3
8. Configurar para acceder desde local hacía S3

Considerar autenticación por STS
