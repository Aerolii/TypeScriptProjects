interface UserComponent {
  type?: 'widget' | 'chart'
  name?: 'input' | 'select' | 'pie'
}

interface UserComponentWithID extends UserComponent {
  id: string
}

class ComponentController {
  private components: UserComponentWithID[] = []

  static instance = new ComponentController()

  private constructor() {}

  static add(component: Required<UserComponent>) {
    const components = ComponentController.instance.components
    const componentWithID = {
      id: `ABC-${components.length}`,
      ...component
    }
    components.push(componentWithID)

    ComponentController.instance.draw(componentWithID)

    return componentWithID.id
  }

  private getIndex(id: string): number {
    return this.components.findIndex((component) => {
      console.log('component.id,id', component.id, id)
      return component.id === id
    })
  }

  get(id: string): UserComponentWithID | undefined {
    return this.components.find((component) => component.id === id)
  }

  set(id: string, component: UserComponent): void {
    const index = this.getIndex(id)
    if (index > -1) {
      this.components.splice(
        index,
        1,
        Object.assign(this.components[index], component)
      )
    } else {
      throw `Not find component by id: ${id}`
    }
  }

  draw(component: UserComponentWithID) {
    console.log(component)
  }
}

const id = ComponentController.add({ name: 'input', type: 'widget' }) // { id: 'ABC-0', name: 'input', type: 'widget' }

console.log(ComponentController.instance.get(id))

ComponentController.instance.set(id, { name: 'select' })
console.log(ComponentController.instance.get(id))
