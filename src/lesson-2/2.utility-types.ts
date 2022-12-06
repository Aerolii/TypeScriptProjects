// 实用类型
interface Customer {
  id: number
  name: string
  age?: number
  email?: string
}

type CustomerOptinals = Partial<Customer>

// Partial 将所有属性设置为可选项
function partialCustomer(
  customer: Customer,
  optionals: CustomerOptinals
): CustomerOptinals {
  return {
    ...customer,
    ...optionals
  }
}

const customer1 = partialCustomer(
  {
    id: 1,
    name: 'Jack',
    age: 22
  },
  {}
)

console.log(customer1) // { id: 1, name: 'Jack', age: 22 }

const customer2 = partialCustomer(
  {
    id: 1,
    name: 'Jack',
    age: 22
  },
  {
    age: 23
  }
)
console.log(customer2) // { id: 1, name: 'Jack', age: 23 }

// Rquired 将所有属性转变为必须属性
type RequiredCustomerOptionals = Required<Customer>

const getRequiredCustomerOptions = (
  customer: Customer
): RequiredCustomerOptionals => {
  return {
    ...customer,
    age: customer.age ?? 0,
    email: customer.email ?? ''
  }
}

console.log(
  getRequiredCustomerOptions({
    id: 1,
    name: 'Jack',
    age: 22
  })
) // { id: 1, name: 'Jack', age: 22, email: '' }

// Pick
// 拾取部分属性
type PickCustomerOptionals = Pick<Customer, 'id' | 'name'>

const gerPickOptionalsOfCustomer = (
  customer: Customer
): PickCustomerOptionals => {
  return {
    id: customer.id,
    name: customer.name
  }
}

console.log(
  gerPickOptionalsOfCustomer({
    id: 1,
    name: 'Jack',
    age: 22
  })
) // { id: 1, name: 'Jack' }

//  Record
// 根据字段生成记录
type RecordCusomterOptionals = Record<number, Customer>
const getCustomerWithoutId = (customers: Customer[]): RecordCusomterOptionals =>
  customers.reduce(
    (a, v) => ({
      ...a,
      [v.id]: v
    }),
    {}
  )

const customers = [
  {
    id: 1,
    name: 'Jack',
    age: 22
  },
  {
    id: 2,
    name: 'Smith',
    age: 11
  },
  {
    id: 3,
    name: 'Jhon',
    age: 23
  }
]

console.log(getCustomerWithoutId(customers))
// {
//   '1': { id: 1, name: 'Jack', age: 22 },
//   '2': { id: 2, name: 'Smith', age: 11 },
//   '3': { id: 3, name: 'Jhon', age: 23 }
// }

type RecordCustomer = Record<Customer['id'], Customer>
type OmitCustomer = Omit<Customer, 'id'>
