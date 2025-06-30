import React from 'react';

interface ProfileProps {
    name: string;
    image: string;
    title: string;
    description: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ name, image, title, description }) => {
    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={image} className="card-img-howqtop mt-3" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                {title ? (
                    <h3 style={{ margin: '0 0 16px 0', fontWeight: 400 }}>{title}</h3>
                ) : (
                    <div
                        style={{
                            height: '12px',
                            width: '60%',
                            background: '#e0e0e0',
                            borderRadius: '6px',
                            margin: '0 auto 16px auto'
                        }}
                    />
                )}
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
};
export default ProfileCard;