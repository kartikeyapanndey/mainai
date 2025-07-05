import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setError('');

        if (!email) {
            setError('Please enter your email address.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Subscription failed. Please try again.');
            }

            setMessage(data.message);
            setEmail('');
        } catch (err) {
            // Handle cases where the response is not JSON
            if (err instanceof SyntaxError) {
                setError('Received an unexpected response from the server. Please try again.');
            } else {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container-fluid bg-primary newsletter py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                        <img className="img-fluid" src="/newsletter.png" alt="Newsletter" />
                    </div>
                    <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                        <h1 className="text-white mb-4">Subscribe to Our Newsletter</h1>
                        <p className="text-white mb-4">Get the latest updates, tips, and resources from PrepEdge delivered straight to your inbox.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="position-relative w-100 mt-3">
                                <input
                                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ height: 48 }}
                                    disabled={isLoading}
                                    required
                                />
                                <button type="submit" className="btn btn-light rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-1 me-1" disabled={isLoading}>
                                    {isLoading ? '...' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                        {message && <p className="text-success bg-white rounded p-2 mt-3">{message}</p>}
                        {error && <p className="text-danger bg-white rounded p-2 mt-3">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;