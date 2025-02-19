class List {
  value: any[];
  size: number;

  constructor(list: any[] = []) {
    this.value = list;
  }

  add(el: any = undefined) {
    this.value = [...this.value, el];
    this.size = this.value.length;
    return this.value;
  }

  remove(el: any = undefined) {
    this.value = this.value.filter((val) => val != el);
    this.size = this.value.length;
    return this.value;
  }
}

export default List;
