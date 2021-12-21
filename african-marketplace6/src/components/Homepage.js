import {Link} from 'react-router-dom'

export default function Homepage() {
    const items = ['bananas ', 'apples ', 'oranges ', 'pineapples '];

    const words = items.map((word, idx) => {
        return <li key={idx}>{word}</li>
    });


    return (
        <>
            <div className="title">
                <h1>African Marketplace</h1>
                <p>Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</p>

            </div>

            
            <div className='products'>
                <h2>Products</h2>
                <ul>{words}</ul>
            </div>
            <nav>
                <Link to="/signup">Sign up</Link>

            </nav>

        </>



    )
}