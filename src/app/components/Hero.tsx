export default function Header() {
    return(
        <section className="relative my-20">
            <picture >
                <img className="w-8/12" src="https://images.unsplash.com/photo-1510623040244-1f396031f3ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </picture>
            <article className="absolute top-10 right-0">
                    <h2 className="text-8xl font-bold">Jackets Collection 2024</h2>
                    <a className="text-4xl font-semibold" href="#">View Gallery</a>
            </article>
        </section>
    )
}