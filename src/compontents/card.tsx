import { FC } from 'react';

interface CardProps {
    item: string,
    onDelete: () => void,
    onDone?: () => void
}

const Card: FC<CardProps> = ({ item, onDelete, onDone }) => {
    return (
        <>
            {
                onDone ?
                    (
                        <div className="card w-full border-3 border-primary border-opacity-50" style={{ boxShadow: "0px 0px 4px 2px #4699fd40" }}>
                            <div className="card-body">
                                <p className="card-text">{item}</p>
                                <button className='btn btn-light me-1' onClick={onDone}><i className="fa-sharp fa-solid fa-square-check" style={{ color: "#0d6efd" }}></i></button>
                                <button className='btn btn-light' onClick={onDelete}><i className="fa-sharp fa-solid fa-trash-can" style={{ color: "#0d6efd" }}></i></button>
                            </div>
                        </div >
                    )
                    :
                    (
                        <div className="card w-full border-3 border-success border-opacity-50" style={{ boxShadow: "0px 0px 4px 2px #2a8e6540" }}>
                            <div className="card-body">
                                <p className="card-text">{item}</p>
                                <button className='btn btn-light' onClick={onDelete}><i className="fa-sharp fa-solid fa-trash-can" style={{ color: "#198754" }}></i></button>
                            </div>
                        </div >
                    )
            }
        </>
    );
};

export default Card;