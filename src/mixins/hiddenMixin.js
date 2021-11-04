export default {
    methods: {
        hideElement(elem) {
            elem.classList.remove('active');
        },
        showElement(elem) {
            elem.classList.add('active');
        },
        showOneElemInList(elems, showIdx) {
            for ( const [i, elem] of elems.entries() )
            {
                if ( i === showIdx ) this.showElement(elem);
                else                 this.hideElement(elem);
            }
        },
        showElemsInList(elems, showIdxList) {
            for ( let [i, elem] of elems.entries() )
            {
                if ( showIdxList.includes(i) ) this.showElement(elem);
                else                           this.hideElement(elem);
            }
        }
    }
}
