import { useState } from 'react'
import Button from '../Button'
import Display from '../Display'
import styles from './styles.module.css'

const Body = () => {

    /*
        Un useState se usa para definir una variable y una función que van logadas
        Estan hechas para que la variable sea un valor o un calculo parcial
        destinado a ser mostrado y que va a cambiar con el tiempo

        Para más información ver https://react.dev/reference/react/useState
    */
    const [expression, setExpression] = useState('0')
    const [calcDone, setcalcDone] = useState(0);
    
    const reset = () => {
        setExpression('0')
    }

    /*
        Función que se pasa a un boton, al ser pulsado este añade su valor
        asociado a la expresión.
    */
    const appendValue = (item) => {
        if(calcDone == 1){
            setExpression(item)
            setcalcDone(0)
        }else{
            expression === '0' ? setExpression(item) : setExpression(expression.concat(item))
        }
    }



    /*
        Función que se pasa a un boton, al ser pulsado este realiza el calculo de
        la expresión que deseamos calcular.
        Además de mostrar el resultado en el display.
    */
    const calc = () => {
        try {
            setcalcDone(1)
            let resultado = eval(expression)
            setExpression(`${expression}=${resultado}`)
        } catch (error) {
            reset()
            setExpression("Error: Operación inválida")
            console.error("Error: Operación inválida")
        }
    }

    /*
        A los botones se les pasa ahora un ``value`` asociado y una función ``action``
        que puede ser cualquier funcion posible, en nuestro caso se le pasa alguna
        de las funciones anteriores.
    */
    return (
        <div className={styles.bodyContainer}>
            <div id={styles.cuerpo}>
                
                <Display value={expression} />
                <div id={styles.btnsContainer}>
                
                    <Button value='7' action={() => appendValue('7')} />
                    <Button value='8' action={() => appendValue('8')} />
                    <Button value='9' action={() => appendValue('9')} />
                    <div id={styles.row}>
                        <Button value='(' action={() => appendValue('(')} />  
                        <Button value=')' action={() => appendValue(')')} />  
                    </div>
                    <Button value='4' action={() => appendValue('4')} />
                    <Button value='5' action={() => appendValue('5')} />
                    <Button value='6' action={() => appendValue('6')} />
                    <div id={styles.row}>
                        <Button value='+' action={() => appendValue('+')} />
                        <Button value='-' action={() => appendValue('-')} />
                    </div>
                    <Button value='1' action={() => appendValue('1')} />
                    <Button value='2' action={() => appendValue('2')} />
                    <Button value='3' action={() => appendValue('3')} />
                    <Button value='*' action={() => appendValue('*')} />
                    <Button value='0' action={() => appendValue('0')} />
                     
                    <Button value='RESET' action={() => reset()} />
                    <Button value='=' action={() => calc()} />
                    <Button value='/' action={() => appendValue('/')} />
                </div>
            </div>
        </div>
    )
}

export default Body