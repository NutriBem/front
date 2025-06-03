import '../../../stylesheet/login.css'

export default function login(){


    return(
        <main>
            <nav>
                <figure>
                    <img src="" alt="" />
                    <h1>NUTRIBEM</h1>
                </figure>

                <h5><strong>Login into your account</strong></h5>

                <section>
                    <div>
                        <p>Username</p>
                        <div>
                            <input type="text" />
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div>
                        <p>Password</p>
                        <div>
                            <input type="text" />
                            <img src="" alt="" />
                        </div>
                    </div>

                    <button>Login now</button>

                    <article>
                        <hr />
                        <p>or</p>
                        <hr />
                    </article>

                    <button>Signup now</button>
                </section>
            </nav>
            
            <aside>
                <img src="" alt="" />
            </aside>
        </main>
    )
}