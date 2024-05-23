export default function Header() {
    return(
        <header className="flex justify-center items-center">
            <ul className="flex justify-around items-center w-full p-3">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Accessories</a></li>
                <li><h1 className="text-3xl font-semibold">ShopDown</h1></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}