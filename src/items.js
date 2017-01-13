var items = [1, 2, 3, 5];
class Items {
    getItems = () => items;

    addItem = (text) => {
        items.push(text)
        return items;
    }

    updateItem = (i,newText) => {
        items[i]=newText;
        return items;
    }

    deleteItem = (i, component) => {
        items.splice(i, 1)
        return items;
    }
}
export default new Items();
