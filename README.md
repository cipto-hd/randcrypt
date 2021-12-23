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

To use randcrypt we must supply with minimally one argument (`length`), optionallly type `argument`:

```bash
rc [length] [type]
```

For simple help about randcrypt, run randcrypt without any arguments:

```bash
rc
```
