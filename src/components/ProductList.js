import React from 'react';

export default function ProductList() {
    var ShopID = "705977";
    var xhr = new XMLHttpRequest()
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        xhr.addEventListener('load', () => {
            setProducts(JSON.parse(xhr.response).items)
        })
        xhr.open("GET", "search_items/?by=relevancy&limit=100&match_id=" + 705977 + "&newest=" + 0 + "&order=desc&page_type=collection&version=2")
        xhr.send()
    }, []);


    return products.map(product => (
        <ProductItem key={product.itemid} product={product} />
    ))

}

function ProductItem({ product }) {
    return (
        <section>
            <div>
                <strong><a target="_blank" href={"https://shopee.vn/" + product.name + "-i." + product.shopid + "." + product.itemid}>{product.name}</a></strong>
                <br></br>
                <strong>{product.price_min} VND</strong>
            </div>
        </section>
    )
}