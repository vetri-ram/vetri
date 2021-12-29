const ErrorMessage = ({Children}) => {
    return (
        <div style={{
            width: '100%',
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "orangered",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
        }}>
            {Children}
            <h4>Please Fill in all Fields</h4>
        </div>
    );
};
export default ErrorMessage;