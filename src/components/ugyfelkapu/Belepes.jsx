import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../../components/ugyfelkapu/styles/ugyfelkapu.css';

export default function Belepes() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='page'>
            <Helmet>
                <title>Bejelentkezés</title>
            </Helmet>

            <div className="panel">
                <h2 className='panel-title'>Bejelentkezés</h2>

                <form onSubmit={handleSubmit} method="post">
                    <div className="form-group">
                        <label htmlFor="email">Email cím vagy telefonszám:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Írja be az email címét vagy telefonszámát"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Jelszó:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Írja be a jelszavát"
                        />
                    </div>

                    <div className="form-footer">
                        <input type="submit" value="Bejelentkezés" />
                        <p>
                            Nincs még fiókja?{' '}
                            <Link to="/regisztracio">
                                Regisztráljon itt
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
