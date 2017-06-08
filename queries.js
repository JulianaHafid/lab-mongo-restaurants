1. db.restaurants.distinct("cuisine").sort()

2. db.restaurants.distinct("cuisine",{"address.street":"Cross Bay Boulevard","address.zipcode":"11414"})

3.

//Pizza
//-----

1. db.restaurants.find({cuisine:/Pizza/,name: { $nin: [/Pizza/,/Pizzeria/] }},{name:1,_id: 0})

2.

//Hamburgers
//-----------

1. db.restaurants.find({cuisine:"Hamburgers"})

2. db.restaurants.count({cuisine:"Hamburgers", borough:"Manhattan"})  //return 124

3. db.restaurants.count({cuisine:"Hamburgers", borough:"Manhattan",name:{$nin:[/Mcdonald/]}}) //return 71

4. db.restaurants.count({cuisine: 'Hamburgers',borough: 'Manhattan',$and : [{ name: { $nin: [/Mcdonald/] } },{ name: { $ne: 'Burger King' } }]}) //return 57

5.

6. db.restaurants.find({cuisine: 'Hamburgers','address.street': 'Pearl Street',},{ _id: 0, name: 1 }) // Burger Burger


//Hard
1.
