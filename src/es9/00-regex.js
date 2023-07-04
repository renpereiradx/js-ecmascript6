    const regex =  /(\d{4})-(\d{2})-(\d{2})/;
    const matchers = regex.exec('1992-19-01');
    console.table(matchers);