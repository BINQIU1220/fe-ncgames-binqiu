const ErroHandle = ({ error }) => {
    console.log(error, "<<<error in errorhandle")
    if (error === 404) return <img className="404" src="https://i.ibb.co/h7zxBwy/404.png" alt="Error 404 image"></img>
    else if (error = 'Something went wrong, please try again.') return <img className="othererrors" src="https://i.pinimg.com/originals/b8/b8/f7/b8b8f787c454cf1ded2d9d870707ed96.png" alt="Error others image"></img>
}

export default ErroHandle;