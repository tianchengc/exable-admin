FROM alpine
ADD build /data/artifacts
ADD deploy /data
WORKDIR /data
RUN chmod +x cp-all.sh
ENTRYPOINT [ "./cp-all.sh" ]