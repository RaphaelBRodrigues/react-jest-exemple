
# React Test Exemples

A bunch of exemples using Jest and Testing Library

## Exemples
* Basic Test
  * [Title Exemple](./src/components/atoms/Title/Title.spec.tsx)
  * [Button Exemple](./src/components/atoms/Button/Button.spec.tsx)
  * [Input Exemple](./src/components/atoms/Input/Input.spec.tsx)

* Advanced Test
  * [Form Exemple](./src/components/molecules/Form/Form.spec.tsx)
  
* Regular Functions
  * [Utils](./src/utils/parseCookies.spec.ts)

## Jest CLI Flags
* `yarn jest --watch`
  * Run and watch all tests related to the changed file 
* `yarn jest --watchAll`
  * Run and watch all tests
* `yarn jest -t <ComponentName />`
  * Run a specific test suit (describe(string))
* `yarn jest --collectCoverage`
  * Run all tests and creates a coverage file
<!-- * `yarn jest --verbose`
  * Run all tests and show a detailed report -->

## Libraries
* [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Jest](https://jestjs.io/pt-BR/)

