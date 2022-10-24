for(const value in statistics){
    let sbuf = `${value}`;
    let vbuf = `${statistics[value]}`;
    if(sbuf.startsWith('r') || vbuf%2){
        console.log(vbuf);
    }
}