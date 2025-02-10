const Error = ({ mensaje }) => {
    return (
        <div className="alert alert-danger m-2 fst-italic fs-5" role="alert">
            <strong>Error: </strong>
            {mensaje}
        </div>
    );
};

export default Error;
