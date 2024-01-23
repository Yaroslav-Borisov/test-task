# Решение задания 2

Метод `preventDefault` отменяет действие события по умолчанию.

## Пример

Вызов `preventDefault` у события отправки формы позволяет избежать перезагрузки страницы.

```js
function onSubmitForm(e) {
  e.preventDefault();

  // ...
}
```
