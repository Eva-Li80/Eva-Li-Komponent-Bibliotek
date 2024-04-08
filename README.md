# Stepper

## Stepper komponenten används för att hålla koll på en process framåt.

### Tex kan det vara att man betsäller en vara och vill se var varan befinner sig under vägens gång

### Denna stepper har jag gjort med tre steg för att illustrera start mitten och slut

### Den har en function som kollar det olika stegen så för varje klick sen så hoppar den framåt

### Den har en annan function som kollar styling klasserna

### Pagination

![Skärmbild 2024-04-08 112556](https://github.com/isabellaes/isabella-components/assets/90759936/15a3afea-5829-4c9b-a15f-c5d8d715c4a9)

```js
type PaginationProps = {
  count: number,
  onChange: (value: number) => void,
  currentPage: number,
  variant: "rounded" | "square",
  color: "primary" | "secondary",
  max?: number,
  siblingCount?: number,
};
```

count - Number of pagination items

onChange - function to handle click on pagination item

max - number of visible pagination items (default 5)

siblingCount - number of visible pagination items before and after current (default 2)

Example

```js
const [currentPage1, setPage1] = useState(1);
function handlePageChange(value: number) {
  setPage1(value);
}

<Pagination
  currentPage={currentPage1}
  count={10}
  onChange={handlePageChange}
  variant="rounded"
  color="primary"
/>;
```
