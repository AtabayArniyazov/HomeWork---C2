�������� ������� C2
����� ������ � ������� ���������� ������ ����������� ��������� (������ ROOTS). 
���������� ������� ���, ����� ����� ��������� �������.

<input type=button value='�����' onclick='TTT()'>
<input type=button value='����-�����' onclick='SquareRoots_Tests()'>

<script>

    // ������� ����� ����������� ���������
    // ���������� ������ ������
    function SquareRoots(a,b,c)
    {
        var d=b*b-4*a*c; // ������������

        if ( d<0 )
            return []; // ��� ������

        if ( d==0 )
            return [ -b/(2*a) ]; // ���� ������

        var x1=(-b+Math.sqrt(d))/(2*a);
        var x2=(-b-Math.sqrt(d))/(2*a);
        return [ x1, x2 ]; // ��� �����
    }

    function SquareRoots_Tests()
    {
        console.log('���� 1,1,1 -> ��� ������');
        var RootsA=SquareRoots(1,1,1);
        console.log( (RootsA.length==0)?'�������':'�� �������!' )

        console.log('���� 1,-2,-3 -> ��� ����� 3,-1');
        var RootsA=SquareRoots(1,-2,-3);
        console.log( ((RootsA.length==2)&&(RootsA[0]==3)&&(RootsA[1]==-1))?'�������':'�� �������!' )

        console.log('���� -1,-2,15 -> ��� ����� -5,3');
        var RootsA=SquareRoots(-1,-2,15);
        console.log( ((RootsA.length==2)&&(RootsA[0]==-5)&&(RootsA[1]==3))?'�������':'�� �������!' )

        console.log('���� 1,12,36 -> ���� ������ -6');
        var RootsA=SquareRoots(1,12,36);
        console.log( ((RootsA.length==1)&&(RootsA[0]==-6))?'�������':'�� �������!' )

        console.log('���� 0,5,-5 -> ���� ������ 1');
        var RootsA=SquareRoots(0,5,-5);
        console.log( ((RootsA.length==1)&&(RootsA[0]==1))?'�������':'�� �������!' )
    }

    function TTT()
    {
        var a=Number(prompt('������� a'));
        var b=Number(prompt('������� b'));
        var c=Number(prompt('������� c'));
        var RootsA=SquareRoots(a,b,c);

        if ( !RootsA.length )
            alert('������ ���!');
        else if ( RootsA.length==1 )
            alert('���� ������: '+RootsA[0]);
        else
            alert('��� �����: '+RootsA[0]+' � '+RootsA[1]);
    }

</script> 
