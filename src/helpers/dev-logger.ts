export class DevLogger {
    static loggingDisabled = false;
    static disableStyle = false;

    static setDisableStyle(boo = true) {
        this.disableStyle = boo;
    }

    static disableLogging() {
        this.loggingDisabled = true;
    }

    static log(...args: any[]) {
        if (!this.loggingDisabled) {
          // eslint-disable-next-line no-console
          console.log(...args);
        }
      }

    static logSystem(
        options: {
          title: string;
          subtitle: string;
          color: string;
          backgroundColor: string;
        },
        ...args: any[]
      ) {
        if (!this.disableStyle) {
          this.log(
            `%c[${options.title}][${options.subtitle}]`,
            `background-color: ${options.backgroundColor}; color: ${options.color};`,
            ...args
          );
        } else {
          this.log(...args);
        }
      }
    

      static logSuccess(title: string, subtitle: string, ...args: any[]) {
        this.logSystem(
          {
            title,
            subtitle,
            color: 'white',
            backgroundColor: 'green',
          },
          ...args
        );
      }
    
      static logError(title: string, subtitle: string, ...args: any[]) {
        this.logSystem(
          {
            title,
            subtitle,
            color: 'white',
            backgroundColor: 'red',
          },
          ...args
        );
      }
    
      static logInfo(title: string, subtitle: string, ...args: any[]) {
        this.logSystem(
          {
            title,
            subtitle,
            color: 'black',
            backgroundColor: 'yellow',
          },
          ...args
        );
      }
    }