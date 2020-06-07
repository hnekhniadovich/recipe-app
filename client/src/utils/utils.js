import nextId from "react-id-generator";

export const limitRecipeTitle = (title, limit=17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, curr) => {
            if(acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0)
        return `${newTitle.join(' ')} ...`
    }
    return title;
};

export const formatCount = (count) => {
    if(count % 1 === 0 ) {
        return count;
    }
    else if(count % 1 === 0.25 || count % 1 === 0.75) {
        return count.toFixed(2);
    } else return count.toFixed(1);
};

export const addAmountPerServing = (ingArr, servings) => {
    ingArr.map(
       (ing, i) => Object.assign(ing, {amountPerServing: ing.amount.us.value / servings}, {id: nextId()}) 
    ) 
    return ingArr;
};

export const addIngrPerServing = (ingredients) => {
    return ingredients.map(ing => {
        return { ...ing, amount: { ...ing.amount, us: { ...ing.amount.us, value: ing.amount.us.value + ing.amountPerServing } } } 
    });
};

export const deleteIngrPerServing = (ingredients) => {
    return ingredients.map(ing => {
        return { ...ing, amount: { ...ing.amount, us: { ...ing.amount.us, value: ing.amount.us.value - ing.amountPerServing } } } 
    });
};

// export const toggleLikeBtn = (arr, id) => {
//     if(arr.length > 0) {
//         arr.map(item => {
//             return (
//                 if(item.id !== id) {
//                     arr.push()
//                 }
//             )
//         })
//     }
    
// };


