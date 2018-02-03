# dropdown-api
Saf javascript ile hazırlanmış minimal dropdown yapısı...

# Api yapısı
1. Dropdown yapısını uygulamak için ilk önce tetikleyiciyi belirtmelisiniz (örnek: ".activator")
2. Dropdown menu kısmını düzenlemek için object cinsinden parametreleri bu alana girebilirsiniz...

```js
    dropdown(".activator", {parameter...});
```


# Örnek kullanımı
Menu kısmını aşağıdaki parametrelerle özelleştirebilirsiniz.

```js
    dropdown(".dropdown-toggle", {
      type: 'click ',
      menu: '.dropdown-menu',
      hidden: 'true',
      autoPosition: 'true',
      NavbarCollapse: 'true',
      showEffect: "show",
      hiddenEffect: "out",
    });
```
Şuan proje alfa aşamasındadır. Hatalar için lütfen geri bildirim verin...

