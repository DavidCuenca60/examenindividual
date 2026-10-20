# Resultados del parcial práctico 2

Registrar resultados reales después de implementar y probar los endpoints. Sustituir los IDs de ejemplo por los utilizados.

| Petición y datos utilizados | Código esperado | Código obtenido | Observación |
| --- | --- | --- | --- |
| Crear una reserva con datos válidos y sala existente. | 201 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Crear con participants como texto. | 400 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Crear con una propiedad adicional, como status. | 400 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Crear con una sala inexistente. | 404 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Cancelar una reserva activa y consultar el cambio guardado. | 200 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Cancelar de nuevo la misma reserva. | 409 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Intentar cancelar con ID abc. | 400 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |
| Intentar cancelar con un ID entero inexistente. | 404 | Error: connect ECONNREFUSED 127.0.0.1:3003 | |

## Pruebas unitarias

Registrar el resultado de `npm test`.

| Caso | Resultado obtenido |
| --- | --- |
| 1. La regla real rechaza una reserva cancelada. | cancels an active reservation and returns the saved result |
| 2. El servicio cancela y guarda una reserva activa. |  does not change or save a reservation when the rule rejects cancellation |
| 3. Si la regla simulada rechaza, conserva active y no guarda. | rejects a reservation that is already cancelled |

Resumen de ejecución: pendiente.
