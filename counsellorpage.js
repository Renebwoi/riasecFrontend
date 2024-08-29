// async function hello(){
//     const username = "Rene"
//     const password = "superman"

//     try {
//         const response = await fetch('http://localhost:3002/api/loginstudent', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.text();
//         console.log('Success:', data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// async function hello(){

//     try {
//         const response = await fetch('https://riasecnode.onrender.com/api/getOne/3')

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('Success:', data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// hello()

async function main(){

    try {
        const response = await fetch('https://riasecnode.onrender.com/api/getOne/3')

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

main()

