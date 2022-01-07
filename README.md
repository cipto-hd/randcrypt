# RANDCRYPT

`randcrypt` is command line tool that can generate a cryptic strong random string and copy it to `clipboard`. Can be useful for creating an identifier, slug, salt, PIN code, fixture, etc. It is a wrapper around `clipboardy` and `crypto-random-string` packages.

## Support

Buy me a coffe at:

[BuyMeACoffee](https://www.buymeacoffee.com/cipto)

[Saweria](https://saweria.co/ciptohadi)

# Installation

To use it in terminal, we install it globally:

```bash
npm install -g randcrypt # or using yarn: yarn global add randcrypt
```

# Usage

To use randcrypt we must supply with minimally one argument ie `length`, optionallly `type` argument:

```bash
rc [length] [type]
```

for example: `rc 32 base64`.

Here are the possible types that we can use:

- hex,
- base64,
- url-safe,
- numeric,
- distinguishable,
- ascii-printable,
- alphanumeric.

For simple help about randcrypt, run randcrypt without any arguments:

```bash
rc
```
