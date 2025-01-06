import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Regisztracio() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='page'>
            <Helmet>
                <title>Regisztráció</title>
            </Helmet>

            <div className="panel">
                <h2 className='panel-title'>Regisztráció</h2>

                <form onSubmit={handleSubmit} method="post">
                    <div className="form-group">
                        <label htmlFor="email">Email cím:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Adja meg az email címét"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefonszám:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Adja meg a telefonszámát"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Jelszó:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Adjon meg egy jelszót"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Jelszó megerősítése:</label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Erősítse meg a jelszót"
                        />
                    </div>

                    <div className="form-footer">
                        <input type="submit" value="Regisztráció" />
                        <p>
                            Van már fiókja?{' '}
                            <Link to="/belepes">
                                Jelentkezzen be itt
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
