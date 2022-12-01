import React, { Component } from 'react';
import styled from 'styled-components';

export default class Info extends Component {
    render() {

    return(
        <InfoWrapper className="col-12 mx-auto  my-3">
            <h1 className="my-5 text-center" >Informacije</h1>
            <div>
                <hr />
                <InfoImportant>
                <b>Adresa:</b> Ive Lole Ribara 118, Temerin, Novi Sad
                <br />
                <b>Telefon:</b> 061/650-74-20
                </InfoImportant>
                <hr/>
                <br />
                <br />
            </div>

            <InfoContent>
            <div>           
                Vršimo adaptaciju vašeg stambenog ili poslovnog objekta.
                <br />
                <br/>
                Radimo pedantno i precizno, pokrivamo teritoriju Novog Sada i šire okoline( do 100km).
                <br />
                <br/>
                U ponudi imamo kompletan program:
                <br />
                <br />
                <b>
                    - MOLERSKI
                    <br />
                    - GIPSARSKI
                    <br />
                    - FARBARSKI
                    <br />
                    - FASADERSKI
                    <br />
                    - KERAMIČARSKI
                    <br />
                    - DEKORATIVNI
                    <br />
                    - PODNE OBLOGE(Laminat)...
                    <br />
                </b>
                <br />
Izvodimo i druge usluge građevinskih radova kao što su :
                <br />
                <b>
                    - ZIDANJE
                    <br />
                    - BETONIRANJE
                    <br />
                    - OGRAĐIVANJE
                    <br />
                    - BRAVARIJA
                    <br />
                    <br />
</b>
                </div>
                <div>
Pozovite nas kako bismo sa vama učestvovali u kreativnosti uređenja vašeg ambijenta.
                <br />
                <br />
Radove izvodimo sa našim ili vašim materijalom u zavisnosti kako vama odgovara.
                <br />
                <br />
Početak radova u najkraćem mogućem roku, a po završetku radova iza nas ostavljamo čisto.
                <br />
                <br />
Pružamo mogućnost plaćanja preko računa.
                <br />
                <br />
                Za više informacija isključivo pozivom na gore naveden broj telefona.
                <br />
                <br />
</div>
</InfoContent>
     </InfoWrapper>
    )
    };
}
    
const InfoWrapper = styled.div`
`

const InfoImportant = styled.div`
@media only screen and (min-width: 1000px) {
    padding-left: 150px;
  }
`

const InfoContent = styled.div`
@media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-around;
  }
`