import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  option1: any;
  option2: any;
  option3: any;
  option4: any;
  option5: any;
  option6: any;

  option1_legends: any;
  option1_data1: any;
  option1_data2: any;

  option2_tableData: any;

  option3_legends: any;
  option3_data1: any;
  option3_data2: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getGraph1();
    this.getGraph2();
    this.getGraph3();
    this.getGraph4();
    this.getGraph5();
    this.getGraph6();
  }

  getGraph1() {
    this.option1_legends = ['1','2','3'];
    this.option1_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
    this.option1_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]

    this.option1 = {
        // color: ['gray','coral'],
        title : {
            text: 'Volume Signed',
            subtext: '',
            x: 'center',
            color:'white'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:this.option1_legends
        },
        series: [
            {
                name:'g1',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data1
            },
            {
                name:'g11',
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                      position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data2
            }
        ]
    };
  }

  getGraph2() {
    this.option2_tableData = [
      {sub:"CCL", mode:"Road", contract:"40", volume:"440"},
      {sub:"CCL", mode:"Rail", contract:"50", volume:"640"},
      {sub:"MCL", mode:"Road", contract:"40", volume:"440"},
      {sub:"MCL", mode:"Rail", contract:"140", volume:"640"},
      {sub:"NCL", mode:"Road", contract:"40", volume:"440"},
      {sub:"NCL", mode:"Rail", contract:"21", volume:"120"},
      {sub:"SECL", mode:"Road", contract:"40", volume:"440"},
      {sub:"SECL", mode:"Rail", contract:"36", volume:"444"},
      {sub:"WCL", mode:"Road", contract:"40", volume:"440"},
      {sub:"WCL", mode:"Rail", contract:"14", volume:"344"},
    ]
  }

  getGraph3() {
    this.option3_legends = ['1','2','3'];
    this.option3_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
    this.option3_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]

    this.option3 = {
        // color: ['gray','coral'],
        title : {
            text: 'Contract Signed',
            subtext: '',
            x: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:this.option1_legends
        },
        series: [
            {
                name:'g1',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data1
            },
            {
                name:'g11',
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                      position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: this.option1_data2
            }
        ]
    };
  }

  getGraph4() {
    this.option4 = {
        title : {
            text: 'Progress summary',
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['data1','data2','data3','data4','data5','data6','data7']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'CCL',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'MCL',
                type:'bar',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'NCL',
                type:'bar',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'SECL',
                type:'bar',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'WCL',
                type:'bar',
                data:[162, 418, 264, 326, 179, 200, 444],
            },

        ]
    };

  }

  getGraph5() {
    this.option5 = {
        angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };

  }

  getGraph6() {
    let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.option6 = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

}
