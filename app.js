function controls ( inputs, regex ) {
    $( inputs ).keyup( function () {
        var reg_np = regex
        if ( !reg_np.test( $( inputs ).val() ) ) {
            $( inputs ).removeClass( 'good' )
            $( inputs ).addClass( 'wrong' )
        } else {
            $( inputs ).removeClass( 'wrong' )
            $( inputs ).addClass( 'good' )
        }
    } )
}

//verification de chaque champs
controls( "#Input1", /^[a-zA-Z- ]+$/ )
controls( "#Input2", /^[a-zA-Z- ]+$/ )
controls( "#Input3", /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/ )

$( "#Input4" ).keyup( function () {
    if ( $( "#Input4" ).val().length > 10 || isNaN( $( "#Input4" ).val() ) ) {
        $( "#Input4" ).removeClass( 'good' )
        $( "#Input4" ).addClass( 'wrong' )
    } else {
        $( "#Input4" ).removeClass( 'wrong' )
        $( "#Input4" ).addClass( 'good' )
    }

} )

///la partie croustillante... compter le nombre de caractère dans le champs des commentaires, l'afficher tec...///

$( "#message" ).keydown( function () {
    var message_value = $( "#message" ).val()
    var separe = message_value.split( '' )
    $( "#mots" ).text( countWords( message_value ) )
    $( "#caracteres" ).text( separe.length )
    function countWords ( str ) {
        return str.trim().split( /\s+/ ).length;
    }
    if ( separe.length >= 200 ) {
        var new_val = message_value.substring( 0, message_value.length - 1 );
        $( "#message" ).val( new_val )
        $( "#message" ).removeClass( 'good' )
        $( "#message" ).addClass( 'wrong' )
        $( "#alert_max" ).css( { "display": "block", "margin-top": "10px" } )
        $( "#alert" ).css( { "display": "none", "margin-top": "10px" } )
    } else {
        $( "#alert_max" ).css( { "display": "none", "margin-top": "10px" } )
        $( "#alert" ).css( { "display": "block", "margin-top": "10px" } )
        $( "#message" ).removeClass( 'wrong' )
        $( "#message" ).addClass( 'good' )
    }

} )

//Nous contacter//
var put1 = document.querySelector( '#Input1' )
var put2 = document.querySelector( '#Input2' )
var put3 = document.querySelector( '#Input3' )
var put4 = document.querySelector( '#Input4' )
var mess = document.querySelector( '#message' )





function hideBtn ( param ) {
    param.addEventListener( "keyup", function () {

        if ( Object.values( param.classList ).includes( 'good' ) == false ) {
            $( '#submit' ).prop( "disabled", true )
        } else {
            $( '#submit' ).prop( "disabled", false )
        }
    } )
}
hideBtn( put1 )
hideBtn( put2 )
hideBtn( put3 )
hideBtn( put4 )
hideBtn( mess )

//message après clique//
$('#confirm').css("display", "none")
$( "#submit" ).click( function () {
    $( ".container" ).css( "opacity", "0" )
    $( '#confirm' ).css( { "display": "block","padding":"50px"} )
    setTimeout( () => { $( ".container" ).css( "opacity", "1" ) }, 5000 )
    setTimeout( () => { $( '#confirm' ).css( "display", "none" ) }, 5000 )
} )